import { TitleStyled, SubTitle } from "./Title.style";

interface TitleProps {
    titulo: String;
    subtitulo?: String | JSX.Element;
}

export default function Title(props: TitleProps) {
    return (
        <>
            <TitleStyled>{props.titulo}</TitleStyled>

            <SubTitle>{props.subtitulo}</SubTitle>
        </>
    );
}