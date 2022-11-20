import igniteLogo from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="py-5 px-0 bg-gray-800 flex justify-center items-center gap-4">
      <img className="h-8"
        src={igniteLogo} 
        alt="Logotipo do Ignite" 
      />
    </div>
  );
};
