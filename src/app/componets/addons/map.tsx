export default function Map({estado, items}:any){
  return(
    <div className=" flex flex-col cursor-default">
      <div className=" text-lg font-sans font-medium text-gray-light my-2">{estado}</div>
      {items.map((cidade:any) =>
      <div className="flex flex-warp gap-2">
        <div className=" text-lg font-sans font-medium text-lilas">{cidade.cidade} <span className=" text-lg font-sans font-medium text-gray"> {cidade.descrição}</span></div>
      </div>
      )}
    </div>
  )}