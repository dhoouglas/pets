import Title from "../ui/components/Title/Title";

export default function Home() {
  return (
    <>
      <Title 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
      }/>
    </>
      
  );
}
