import type { Endereco } from "./Endereco";
import type { EntidadeBase } from "./EntidadeBase";
import type { UserAddress } from "./UserAddress";

export interface Usuario {
    dadosEntidade: EntidadeBase | null,
    enderecos: Array<Endereco>,
    usuarioEndereco: Array<UserAddress>,
    name: string | null,
    email: string | null,
    password: string | null,
    role: string | null
}
