import React, { useRef, useState } from 'react';
import hyougo from './hyougolist.svg';
import './App.css';

function App() {

  //----------------------------------------------------

  //市町村クラス
  type MunicipalitiesClass = {
    MunicipalitiesName: string;
    Id: number;
    Check: boolean;
  };

  //市町村リスト
  const MuniList = [
    "相生市",    "明石市",    "赤穂市",    "朝来氏",    "芦屋市",    "尼崎市",
    "淡路市",    "伊丹市",    "市川町",    "猪名川町",    "稲美町",    "小野市",
    "加古川市",    "加西市",    "加東市",    "香美町",    "神河町",    "上郡町",
    "川西市",    "神戸市",    "佐用市",    "三田市",    "宍粟市",    "新温泉町",
    "洲本市",    "太子町",    "多可町",    "高砂市",    "宝塚市",    "たつの市",
    "丹波市",    "丹波篠山市",    "豊岡市",    "西宮市",    "西脇市",    "播磨町",
    "姫路市",    "福崎町",    "三木市",    "南あわじ市",    "養父市"
  ];

  //----------------------------------------------------

  //固定長変数
  const [Munis, setMuni] = useState<MunicipalitiesClass[]>([]);

  // 初期化を検知するフラグ
  const loading = useRef(true);

  //----------------------------------------------------

  //一度だけ実行
  React.useEffect(() => {

    // すでに初期化されていたら処理を抜ける
    if (loading.current === false) {
      return;
    }

    //リスト追加処理
    listadd();

    // 初期化済みのフラグを立てる
    loading.current = false;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //----------------------------------------------------

  //リスト追加処理
  function listadd() {

    for(let Index = 0; Index < MuniList.length; Index++){
      
      //Muni作成
      const newMuni: MunicipalitiesClass ={
        MunicipalitiesName: MuniList[Index],
        Id: Index,
        Check: false,
      };

      //リスト追加
      setMuni((Munis) => [...Munis, newMuni]);
    }
  }

  //ボタン押下処理
  const ButtonClick = (id: number, check: boolean) =>{

    const newMunis = Munis.map((muni) => {
      if(muni.Id === id){
        muni.Check = !check;
      }

      return muni;
    });

    setMuni(newMunis);
  }

  //----------------------------------------------------

  //本体
  return (
    <div className="App">
      <header className="App-Header">
        <div className='App-Title'>兵庫県(市町村)達成リスト</div>
      </header>
      <img src={hyougo} alt="some value" className='App-logo'/>
      <div className="Button-List">
        {Munis.map(muni => (
          <button key={muni.Id} className='button' onClick={(e) => ButtonClick(muni.Id, muni.Check)} disabled={muni.Check}>
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">{muni.MunicipalitiesName}</span>
          </button>
        ))}
      </div>
    </div>
  );

  //----------------------------------------------------
}

export default App;
