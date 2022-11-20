import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="flex flex-col items-center -mt-7">
        <Avatar src="https://github.com/MacielAzevedo.png" />

        <strong className="mt-4 text-gray-100 leading-relaxed">
          Maciel Azevedo
        </strong>
        <span className="text-sm text-gray-400 leading-relaxed">
          Web Developer
        </span>
      </div>

      <footer className="border-t border-gray-600 mt-6 pt-6 pb-8 px-8">
        <a
          className="w-full bg-transparent text-green-500 border border-green-500 
          rounded-lg h-[50px] py-0 px-6 font-bold decoration-0 flex justify-center items-center gap-2
        hover:text-white hover:bg-green-500 ease-in duration-100"
          href="#"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
