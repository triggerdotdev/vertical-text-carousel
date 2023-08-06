export function InlineTextCarouselWithCss({
  texts
}: {
  texts: string[]
}) {
  return (
    <div className="flex w-full">
      <div className="flex w-full justify-center">
      <div className="scene">
        <div className="carousel">
          {
            texts?.map(text => <div className="carousel__cell text-bright">{text}</div>)
          }
        </div>
      </div>
      </div>
    </div>
  )
 }