

class ProdutoDAO {
    inserir (descricao, unidade) {
        const query = `INSERT INTO produto (descricao, unidade) VALUES ('${descricao}', '${unidade}')`;
    
        return query;
    };

    alterar (descricao, unidade, codProd){
        const query = `UPDATE produto SET descricao = ${descricao}, unidade = ${unidade} WHERE codprod = ${codProd}`;
    
        return query;
    };

    excluir (codProd) {
        const query = `DELETE FROM produto WHERE codprod = ${codProd}`;

        return query;
    };

    listarTodos() {
        const query = `SELECT codprod, descricao FROM produto`;

        return query;
    };

    consultaProd(pesquisa) {
        const query = `SELECT codprod, descricao, unidade FROM produto WHERE codprod::text = '${pesquisa}'`;

        return query;
    }
}

module.exports = ProdutoDAO;