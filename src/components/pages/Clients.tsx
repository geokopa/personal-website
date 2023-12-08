import { ClientList } from "../../data/data";
import { Client } from "../../types/types";

const Clients = () => {
  return (
    <div id="clients" className="w-full md:h-screen text-black bg-gray-100">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">
            Clients
          </p>
          <p className="py-6">
            // See the companies I've had the privilege to work with
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 items-center gap-8 text-center pb-[100px] sm:pb-0">
          {ClientList.map((item: Client) => (
            <div
              key={item.id}
              className="hover:scale-125 duration-300 flex flex-col gap-4"
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 mx-auto sm:w-32 md:grayscale md:hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
