import Firebase from '../conexao/index';

class HandleDB {
  getDados(req, res) {
    Firebase.firestore()
      .collection('finance')
      .doc()
      .get(req.body)
      .then(() => res.status(200).json({ ok: 'sucesso' }))
      .catch(() => res.status(401).json({ erro: 'Usuario não encontrado' }));
  }

  updateDados(req, res) {
    const { id } = req.headers;
    Firebase.firestore()
      .collection('finance')
      .doc(id)
      .update(req.body)
      .then(() => res.status(200).json({ ok: 'sucesso' }))
      .catch(() => res.status(401).json({ erro: 'Usuario não encontrado' }));
  }

  createDados(req, res) {
    Firebase.firestore()
      .collection('finance')
      .doc()
      .set(req.body)
      .then(() => res.status(200).json({ ok: 'sucesso' }))
      .catch(() => res.status(401).json({ erro: 'Usuario não encontrado' }));
  }

  deleteDados(req, res) {
    const { id } = req.headers;
    Firebase.firestore()
      .collection('finance')
      .doc(id)
      .delete(req.headers)
      .then(() => res.status(200).json({ ok: 'sucesso' }))
      .catch(() => res.status(401).json({ erro: 'Usuario não encontrado' }));
  }
}

export default new HandleDB();
