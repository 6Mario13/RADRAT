import PropTypes from 'prop-types'

const Card = ({ title, image, description }) => (
  <div className="my-28 border rounded-xl shadow-xl flex flex-col lg:flex-row items-center">
    <img className='w-full lg:w-2/3 rounded-xl '  src={image} alt={title} />
    <div className='p-6 '>
      <p>Your choice:</p>
      <p className='text-xl lg:text-3xl pb-6 '>{title}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

