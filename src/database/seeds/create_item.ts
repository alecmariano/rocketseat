import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { name: 'Lâmpadas', image: 'lampada.svg', description: 'Descarte de lâmpadas...' },
        { name: 'Baterias e pilhas', image: 'bateria.svg', description: 'Descarte de baterias...' },
        { name: 'Papéis e papelão', image: 'papel.svg', description: 'Descarte de papel...' },
        { name: 'Eletrônicos', image: 'eletronico.svg', description: 'Descarte de eletrônicos...' },
        { name: 'Resíduos orgânicos', image: 'organico.svg', description: 'Descarte de orgânicos...' },
        { name: 'Óleo de cozinha', image: 'oleo.svg', description: 'Descarte de óleos...' },
    ]);
}