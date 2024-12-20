import Image from 'next/image';

const Punyeta = () => {
  return (
    <div className="relative w-[300px] h-[400px]">
      <Image
        src="https://picsum.photos/id/237/200/300"
        alt="Sample image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Punyeta;
