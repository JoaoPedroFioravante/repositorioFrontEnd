import { z } from 'zod'

enum EnumEspecies{
    "CFA" = "CANINO FEMEA ADULTO",
    "CMA" = "CANINO MACHO ADULTO",
    "CFF" = "CANINO FEMEA FILHOTE",
    "CMF" = "CANINO MACHO FILHOTE",
    "FFA" = "FELINO FEMEA ADULTO",
    "FMA" = "FELINO MACHO ADULTO",
    "FFF" = "FELINO FEMEA FILHOTE",
    "FMF" = "FELINO MACHO FILHOTE"
};

enum EnumSituacaoEntrada{
    "SAUDAVEL" = "SAUDAVEL",
    "DOENTE" = "DOENTE"
}

const animalSchema = z.object({
    name: z.string().min(3).max(20),
    chip: z.string(),
    especie: z.enum(EnumEspecies),
    raca: z.string().min(3),
    descricao: z.string(),
    esterelizado: z.boolean(),
    idade_entrada: z.number().min(0),
    situacao_entrada: z.enum(EnumSituacaoEntrada),
    observacao: z.string(),
    // foto:
})

export default animalSchema;



/* Ficha de Entrada de Animais

id, data da entrada, chip, especie, raca, descricao, esterelizado, 
idade na entrada (meses), situacao na entrada (saudavel), qtde
observacao, responsavel (-), protocolo (-), id

-- info da pessoa
nome (que fez o chamado, talvez)
tipo (solicitante)

*/
