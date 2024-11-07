import Box from "./box"

const Content = () => {
  return (
    <div className="bg-orange-50 pb-4 flex justify-center rounded-lg " id="products">
        <div className="flex flex-col  w-full mx-10">
      <div className="flex gap-4 justify-between">
      <Box/>
      <Box/>
      <Box/>
      </div>
        </div>
    </div>
  )
}

export default Content