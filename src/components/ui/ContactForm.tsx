import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormData } from '../../types'
import { projectTypes } from '../../data/site'

type Errors = Partial<Record<keyof ContactFormData, string>>

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: ContactFormData): Errors {
  const errors: Errors = {}

  if (!data.name.trim()) {
    errors.name = 'Enter your name.'
  }

  if (!data.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!data.message.trim()) {
    errors.message = 'Add a short message.'
  }

  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  const formRef = useRef<HTMLFormElement>(null)

  function update<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: undefined,
      }))
    }

    if (status === 'error') {
      setStatus('idle')
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validation = validate(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      const firstInvalid =
        formRef.current?.querySelector<HTMLElement>(
          '[aria-invalid="true"]',
        )

      firstInvalid?.focus()
      return
    }

    setStatus('submitting')

    try {
      const formElement = e.currentTarget
      const formData = new FormData(formElement)

      const body = new URLSearchParams()

      formData.forEach((value, key) => {
        body.append(key, String(value))
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite">
        <p className="eyebrow">Message sent</p>

        <p className="mt-4 max-w-[42ch] text-2xl leading-snug tracking-tightish sm:text-3xl">
          Thanks, {form.name.split(' ')[0]} — I’ll get back to you shortly.
        </p>

        <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-soft">
          Your message has been sent successfully. I’ll get back to you as
          soon as I can.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(emptyForm)
            setErrors({})
            setStatus('idle')
          }}
          className="btn-secondary mt-7"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (hasError: boolean) =>
    `field-input ${hasError ? 'border-red-400' : ''}`

  return (
    <form
      ref={formRef}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Required by Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot spam protection */}
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human:
          <input name="bot-field" />
        </label>
      </p>

      {/* Email subject */}
      <input
        type="hidden"
        name="subject"
        value="New project inquiry from your portfolio"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="field-label">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={fieldClass(Boolean(errors.name))}
          placeholder="Your name"
        />

        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="field-label">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass(Boolean(errors.email))}
          placeholder="you@example.com"
        />

        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Project type */}
      <div>
        <label htmlFor="projectType" className="field-label">
          Project type
        </label>

        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={(e) => update('projectType', e.target.value)}
          className="field-input"
        >
          <option value="">Select a project type</option>

          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={fieldClass(Boolean(errors.message))}
          placeholder="Tell me a little about what you’re working on..."
        />

        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submission error */}
      {status === 'error' && (
        <div
          role="alert"
          className="text-sm leading-relaxed text-red-500"
        >
          Something went wrong while sending your message. Please try again,
          or email me directly at oluwole.olusi@gmail.com.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <span aria-hidden="true">Sending</span>
            <span className="sr-only">Your message is being sent</span>
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  )
}