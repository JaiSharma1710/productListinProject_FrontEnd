import LoadingGIF from '../../assets/Loading.gif';

function Loader() {
  return (
    <div className="relative">
      <div className="w-screen h-screen absolute z-[5] bg-black/50" />
      <div className="w-screen h-screen flex justify-center items-center absolute z-10">
        <img src={LoadingGIF} className="rounded" />
      </div>
    </div>
  );
}

export default Loader;
