import spinner from '../../assets/spinner.gif'
const Spinner = () => {
  return (
    <div class='h-screen bg-white'>
      <div class='flex justify-center items-center h-full'>
        <img class='h-16 w-16' src={spinner} alt='' />
      </div>
    </div>
  )
}

export default Spinner
