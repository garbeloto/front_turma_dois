import type { EntidadeBase } from "./EntidadeBase";

export interface Endereco  {
    dadosEntidade: EntidadeBase,
    street: string | null,
    number: string | null,
    complement: string | null,
    neighborhood: string | null,
    city: string | null,
    state: string | null,
    contry: string | null,
    zipCode: string | null,
    district: string | null
}