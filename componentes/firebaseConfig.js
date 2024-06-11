import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAe5aw7Eox8Ab-pZSJr6x3pZUyMVPaz3No",
  authDomain: "interactkidsfirebase.firebaseapp.com",
  projectId: "interactkidsfirebase",
  storageBucket: "interactkidsfirebase.appspot.com",
  messagingSenderId: "855718458478",
  appId: "1:855718458478:web:836c9dc5bfef170314627f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRankingLabirinto = async (apelido, time) => {
  try {
    await addDoc(collection(db, 'rankinglabirinto'), {
      apelido,
      time,
      createdAt: serverTimestamp()
    });
    console.log('Ranking salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar ranking: ', error);
  }
};

const getRankingLabirinto = async () => {
  try {
    const q = query(collection(db, 'rankinglabirinto'), orderBy('time', 'asc'), limit(5));
    const querySnapshot = await getDocs(q);
    const rankings = querySnapshot.docs.map(doc => doc.data());
    return rankings;
  } catch (error) {
    console.error('Erro ao recuperar rankings: ', error);
    return [];
  }
};

const saveRankingMemoria = async (apelido, time, moves) => {
  try {
    await addDoc(collection(db, 'rankingmemoria'), {
      apelido,
      time,
      moves,
      createdAt: serverTimestamp()
    });
    console.log('Ranking salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar ranking: ', error);
  }
};

const getRankingMemoria = async () => {
  try {
    const q = query(collection(db, 'rankingmemoria'), orderBy('time', 'asc'), limit(5));
    const querySnapshot = await getDocs(q);
    const rankings = querySnapshot.docs.map(doc => doc.data());
    return rankings;
  } catch (error) {
    console.error('Erro ao recuperar rankings: ', error);
    return [];
  }
};

const saveRankingEmoji = async (apelido, time, score) => {
  try {
    console.log('Salvando:', { apelido, time, score });
    await addDoc(collection(db, 'rankingemoji'), {
      apelido,
      time,
      score,
      createdAt: serverTimestamp()
    });
    console.log('Ranking salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar ranking: ', error);
  }
};

const getRankingEmoji = async () => {
  try {
    const q = query(collection(db, 'rankingemoji'), orderBy('score', 'desc'), limit(5));
    const querySnapshot = await getDocs(q);
    const rankings = querySnapshot.docs.map(doc => doc.data());
    console.log('Rankings recuperados:', rankings);
    return rankings;
  } catch (error) {
    console.error('Erro ao recuperar rankings: ', error);
    return [];
  }
};

export { saveRankingLabirinto, getRankingLabirinto, saveRankingMemoria, getRankingMemoria, saveRankingEmoji, getRankingEmoji };
