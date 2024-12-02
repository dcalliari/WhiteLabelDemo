import casasBahia from "./casasBahia";
import magazineLuiza from "./magazineLuiza";

type BrandKeys = keyof typeof brands;

const brands = { casasBahia, magazineLuiza };
const activeBrand: BrandKeys = (process.env.EXPO_PUBLIC_BRAND as BrandKeys) || "casasBahia";

export default brands[activeBrand];