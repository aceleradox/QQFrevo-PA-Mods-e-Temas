## Mod: Embed-Post

O mod **Embed-Post** permite visualizar os primeiros posts de perfis do Instagram em tempo real diretamente no QQFrevo Progressive Autonomy.

### Instalação

1. **Criar a pasta do mod**
   - Dentro da pasta `mods`, crie a seguinte estrutura:
     ```
     mods/embed-post
     ```

2. **Adicionar os arquivos**
   - Coloque os arquivos do mod dentro da pasta `embed-post`:
     ```
     custom.js
     custom.css
     anim.css
     ```

3. **Ativar o mod**
   - Abra `config.json` na raiz do projeto e adicione `"embed-post"` em `activeMods`:
     ```json
     {
       "activeMods": ["autonomy", "corrector-lab", "embed-post"]
     }
     ```

4. **Reiniciar o servidor**
   - Execute no terminal:
     ```bash
     node qqfrevo.js
     ```
   - O mod será carregado automaticamente junto com os outros mods ativos.

### Uso

- Acesse [http://localhost:3000](http://localhost:3000).
- Faça uma busca e os perfis do Instagram exibirão os primeiros posts em tempo real.
