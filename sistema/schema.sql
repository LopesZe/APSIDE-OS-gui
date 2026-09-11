-- Schema do banco de dados Supabase
-- Execute este SQL no Supabase SQL Editor para criar as tabelas

-- Clientes
CREATE TABLE IF NOT EXISTS clientes (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  cnpj TEXT,
  cidade TEXT,
  contato TEXT,
  endereco TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Produtos
CREATE TABLE IF NOT EXISTS produtos (
  id BIGSERIAL PRIMARY KEY,
  codigo TEXT,
  descricao TEXT NOT NULL,
  marca TEXT,
  unidade TEXT,
  preco_ref NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  id BIGSERIAL PRIMARY KEY,
  cliente_id BIGINT REFERENCES clientes(id),
  data TEXT,
  valor_total NUMERIC,
  vendedor TEXT,
  numero_pedido TEXT,
  origem TEXT,
  condicao TEXT,
  nf_arquivo TEXT,
  obs TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Itens do pedido
CREATE TABLE IF NOT EXISTS itens_pedido (
  id BIGSERIAL PRIMARY KEY,
  pedido_id BIGINT REFERENCES pedidos(id),
  produto_id BIGINT REFERENCES produtos(id),
  qtd NUMERIC,
  preco_unit NUMERIC,
  subtotal NUMERIC
);

-- Comissões mensais
CREATE TABLE IF NOT EXISTS comissoes_mes (
  mes TEXT PRIMARY KEY,
  das_valor NUMERIC,
  das_anexo TEXT,
  obs TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Números LUMANTI por cliente/mês
CREATE TABLE IF NOT EXISTS lumanti_numeros (
  id BIGSERIAL PRIMARY KEY,
  mes TEXT NOT NULL,
  cliente TEXT NOT NULL,
  valor NUMERIC
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_pedidos_cliente ON pedidos(cliente_id);
CREATE INDEX IF NOT EXISTS idx_pedidos_data ON pedidos(data);
CREATE INDEX IF NOT EXISTS idx_itens_pedido ON itens_pedido(pedido_id);
CREATE INDEX IF NOT EXISTS idx_produtos_marca ON produtos(marca);
