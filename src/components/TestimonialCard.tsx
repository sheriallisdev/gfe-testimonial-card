interface TestimonialCardProps {
  fullname: string;
  username: string;
  quote: string;
  image: string
}

const TestiminalCard = ({ fullname, username, quote, image }: TestimonialCardProps) => {
  return (
    <figure className="w-[340px] h-fit p-6 bg-white rounded-lg font-noto drop-shadow-md">
      <figcaption className="flex text-left mb-4">
        <img src={image} alt={`Profile picture of ${fullname}`} className="w-12 h-12" />
        <div className="ml-4">
          <div className="text-lg text-neutral-900 font-semibold">{fullname}</div>
          <div className="text-sm text-neutral-600">{`@${username}`}</div>
        </div>
      </figcaption>
      <blockquote>
        <p className="text-left text-base text-neutral-600">
          {quote}
        </p>
      </blockquote>
    </figure>
  )
}

export default TestiminalCard;
