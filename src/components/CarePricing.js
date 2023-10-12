import DropDownIcon from '../assets/icons/chevron-down.svg';
import PricingIcon from '../assets/icons/pricing/pricing.svg';

const CarePricing = () => {
  return (
    <div className='flex justify-between bg-white rounded-md py-3 px-2 mt-4'>
      <div className='flex justify-center items-center'>
        <img src={PricingIcon} />
        <p className='pl-4 font-semibold text-gray-600'>Care Pricing</p>
      </div>
      <img src={DropDownIcon} />
    </div>
  )
}

export default CarePricing;