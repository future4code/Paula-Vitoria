import logo from './logo.svg';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import HistoryIcon from '@material-ui/icons/History';
import YouTubeIcon from '@material-ui/icons/YouTube';
function App() {
  const titulo ="Título do Vídeo" 
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  return (
    <div>
    <div className="tela-inteira">
        <header>
        <YouTubeIcon/><h1>LabTube</h1>
            <input type="text" placeholder="Pesquisa" id="campoDeBusca"/> <div id="botao-busca"><SearchIcon/></div><MicIcon/>
            <div className="icones-superior">
                <div><VideoCallIcon/></div> <div><AppsIcon/></div><div><NotificationsIcon/> </div>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><div><HomeIcon/></div>Início</li>
                    <li className="botoes-meunu-vertical"><div><WhatshotIcon/></div>Em alta</li>
                    <li className="botoes-meunu-vertical"><div><SubscriptionsIcon/></div>Inscrições</li>
                    <li className="botoes-meunu-vertical"><div><CropOriginalIcon/></div>Originais</li>
                    <li className="botoes-meunu-vertical"><div><HistoryIcon/></div>Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media2" onclick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            
        </footer>
    </div>
    </div>
  );
}

export default App;
