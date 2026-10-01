import {
  SiTesla,
  SiKia,
  SiNissan,
  SiBmw,
  SiRenault,
  SiVolvo,
  SiMini,
} from 'react-icons/si';

// Logotipo tipográfico: el texto se ajusta al ancho del viewBox con textLength,
// así nunca se desborda sin importar la longitud de la marca.
// Recibe props (className, aria-hidden...) para que el tamaño sí se aplique.
const makeWordmark = (text, fontSize) => {
  const Wordmark = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text
        x="1"
        y="12"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
        textLength="22"
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>
    </svg>
  );
  Wordmark.displayName = `${text}Logo`;
  return Wordmark;
};

const BYDLogo = makeWordmark('BYD', 11);
const CheryLogo = makeWordmark('CHERY', 8);
const ChanganLogo = makeWordmark('CHANGAN', 6.5);
const DongfengLogo = makeWordmark('DONGFENG', 5.5);

const DeepalLogo = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L22 12 12 22 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 6.5L17.5 12 12 17.5 6.5 12Z" fill="currentColor" />
  </svg>
);

export const BrandLogos = {
  Tesla: SiTesla,
  BYD: BYDLogo,
  KIA: SiKia,
  Nissan: SiNissan,
  BMW: SiBmw,
  Chery: CheryLogo,
  Changan: ChanganLogo,
  Deepal: DeepalLogo,
  Renault: SiRenault,
  Volvo: SiVolvo,
  Dongfeng: DongfengLogo,
  'Mini Cooper': SiMini,
};

export default BrandLogos;