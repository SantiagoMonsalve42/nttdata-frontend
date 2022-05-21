import { ICurrencyDto } from "./ICurrencyDto";
import { IFlagsDto } from "./IFlagsDto";
import { ILanguageDto } from "./ILanguageDto";
import { IRegionalBlocDto } from "./IRegionalBlocDto";
import { ITranslationsDto } from "./ITranslationsDto";

export interface IResponseGetAllContries{
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: IFlagsDto;
  currencies: ICurrencyDto[];
  languages: ILanguageDto[];
  translations: ITranslationsDto;
  flag: string;
  regionalBlocs: IRegionalBlocDto[];
  cioc: string;
  independent: boolean;
  gini?: number;
}
