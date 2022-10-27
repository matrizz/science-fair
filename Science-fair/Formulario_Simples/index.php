<html>
<head>
	<meta charset="utf-8">
	<title>Formulário Escola Virtual</title>
	<link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
	<center>
		<h1>Escola Virtual</h1>
		<h2>Formulário de Pré-Matrícula</h2>
	</center>
	<fieldset id="externo">
		<form method="post">
		<fieldset>
			<h2>Dados Pessoais</h2>
				<div id="dadosPessoais">
					<p>Nome: <input type="text" id="name" name="nome"></p>
					<p>CPF (xxx.xxx.xxx-xx): <input type="number" id="name" name="cpf"></p>
					<p>Sexo: 
						<input type="radio" name="sexo" value="0">Masculino
						<input type="radio" name="sexo" value="1">Feminino
						<input type="radio" name="sexo" value="2">Outros
					</p>
					<p>Data de Nascimento: <input type="date" id="date" name="data">
					<p>Estado Civil: 
						<input type="radio" name="sexo" value="0">Solteiro(a)
						<input type="radio" name="sexo" value="1">Separado(a)
						<input type="radio" name="sexo" value="2">Casado(a)
						<input type="radio" name="sexo" value="3">Divorciado(a)
						<input type="radio" name="sexo" value="4">Viúvo(a)
					</p>
					<p>Foto Pessoal (3x4): <input type="file" name="pic" accept="image/*"></p>
					<p>Nome da Mãe: <input type="text" name="nomeMae"></p>
					<p>Nome do Pai: <input type="text" name="nomePai"></p>
					<p>Telefone/Celular: <input type="number" name="telefone">
					<p>E-Mail: <input type="text" name="email"></p>
					<h2>Endereço</h2>
					<p>Estado:  
					<select name="serie">
						<option value="0">-Selecione-</option>
						<option value="1">Acre</option>
						<option value="2">Alagoas</option>
						<option value="3">Amapá</option>
						<option value="4">Amazonas</option>
						<option value="5">Bahia</option>
						<option value="6">Ceará</option>
						<option value="7">Distrito Federal</option>
						<option value="8">Espírito Santo</option>
						<option value="9">Goiás</option>
						<option value="10">Maranhão</option>
						<option value="11">Mato Grosso</option>
						<option value="12">Mato Grosso do Sul</option>
						<option value="13">Minas Gerais</option>
						<option value="14">Pará</option>
						<option value="15">Paraíba</option>
						<option value="16">Paraná</option>
						<option value="17">Pernambuco</option>
						<option value="18">Piauí</option>
						<option value="19">Rio de Janeiro</option>
						<option value="20">Rio Grande do Norte</option>
						<option value="21">Rio Grande do Sul</option>
						<option value="22">Rondônia</option>
						<option value="23">Roraima</option>
						<option value="24">Santa Catarina</option>
						<option value="25">São Paulo</option>
						<option value="26">Sergipe</option>
						<option value="27">Tocantins</option>
					</select>
				</p>
				<p>Cidade: <input type="text" name="cidade"></p>
				<p>CEP: <input type="number" name="cep"></p>
				<p>Bairro: <input type="text" name="bairro"></p>
				<p>Rua: <input type="text" name="rua"></p>
				<p>Número: <input type="number" name="numerocasa"></p>
				<div>
		</fieldset>
		<fieldset>
			<h2>Informações de Curriculo:</h2>
				<p>Escolaridade: 
					<select name="serie">
						<option value="0">-Selecione-</option>
						<option value="1">Ensino Médio (Cursando)</option>
						<option value="2">Ensino Médio (Completo)</option>
						<option value="3">Ensino Médio (Incompleto)</option>
						<option value="4">Ensino Superior (Cursando)</option>
						<option value="5">Ensino Superior (Completo)</option>
						<option value="6">Ensino Superior (Incompleto)</option>
					</select>
				</p>
					<p>Turno Escolar:
						<input type="radio" name="turno" value="0">Manhã
						<input type="radio" name="turno" value="1">Tarde
						<input type="radio" name="turno" value="2">Noite
						<input type="radio" name="turno" value="3">Integral
						<input type="radio" name="turno" value="4">Não cursando
					</p>
				<p>Atividades Extracurriculares: <input type="text" id="name" name="atividades"></p>
					
			</fieldset> 
			<input type="submit" value="Enviar formulário">
			<input type="reset" value="Limpar campos">
		</fieldset>
</body>
</html>