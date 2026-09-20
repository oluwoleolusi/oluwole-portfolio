interface Props {
  src: string
  alt: string
  ratio?: 'desktop' | 'mobile'
  className?: string
  priority?: boolean
}

export default function ScreenshotFrame({ src, alt, ratio = 'desktop', className = '', priority = false }: Props) {
  const aspect = ratio === 'desktop' ? 'aspect-[8/5]' : 'aspect-[1170/2532]'

  return (
    <div className={`${aspect} w-full overflow-hidden bg-line/40 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}
