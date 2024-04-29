import "../../css/rooms.css";

const Rooms = () => {
  return (
    <>
      <div className="relative z-10">
        <RevealText />
      </div>
      <ImageRoom />
    </>
  );
};

export default Rooms;

const RevealText = () => {
  return (
    <section className="mt-[-100vh] h-[400vh] [view-timeline-name:--reveal-wrapper]">
      <div className="min-h-screen sticky top-0 flex justify-center items-center w-3/4 mx-auto">
        <div>
          <p className="text-3xl supports-[animation-timeline]:reveal-text text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            delectus repudiandae. At sed labore aperiam quasi aut qui beatae
            ullam recusandae expedita dignissimos, iure numquam voluptatem esse
            nobis soluta animi.
          </p>
        </div>
      </div>
    </section>
  );
};

const ImageRoom = () => {
  return (
    <section className="h-[200vh] mt-[-100vh] flex justify-center items-center">
      <div className="sticky top-0 h-screen">
        <p className="h-full">kmdk</p>
      </div>
    </section>
  );
};
