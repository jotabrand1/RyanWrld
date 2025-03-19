import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MoveHorizontal, Images } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const projects = [
  {
    id: 1,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742392482/1_1_g3hauu.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671865/3_vjsp2c.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671873/4_ya0qg2.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671885/5_dpqjft.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671894/6_kt0kqr.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671899/7_bx4i94.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671907/8_eoopif.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671911/9_tftjcd.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671918/9_gepfry.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671924/10_u3kotu.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671928/11_zchirb.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671934/12_q0z4mg.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671944/13_xxqu1m.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671953/14_ax0hln.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671962/15_eegjb3.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671967/16_kzqylf.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671975/17_rdtfpw.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671981/18_lfvrqs.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671986/19_pmewqs.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739671993/20_ol3my2.jpg"
    ]
  },
  {
    id: 2,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724253/1_lt6xa6.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724253/2_yijswg.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724253/3_c1fams.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724251/4_axgm3y.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724252/5_n2ragi.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724250/6_hj5k40.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724250/7_erna4x.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724249/8_ly2gwc.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724249/9_bx9i2u.png"
    ]
  },
  {
    id: 3,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742392851/capa-behance_a9ymnj.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724629/1_yq6ggk.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724636/2_dlcpu9.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724633/3_fekpae.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724624/4_dpl185.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724623/5_eazsxe.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724634/6_cn0lxq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724626/7_sc11zu.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724631/8_eyzpbq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724621/9_safc6u.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724622/10_xaxff1.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724628/11_gipxnq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724635/12_otoj8o.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724630/13_ianv3a.png"
    ]
  },
  {
    id: 4,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725542/Ananse-capa---Behance_sht2ha.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725529/03_sgaiaw.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725531/3_n4ndgw.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725534/04_bbhdyi.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725535/05_o3rkn3.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725535/05_o3rkn3.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725557/25_12_zmbvxq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725541/31_12_rku05u.jpg"
    ]
  },
  {
    id: 5,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725745/Black-capa---Behance_f0g31k.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725705/02_dzjsad.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725708/03_w8vdpf.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725710/05_wo1ube.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725712/6_a77xqa.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725715/08_rarhoo.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725717/09_mi0vr0.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725720/10_jk7nub.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725722/10_wozjpa.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725731/11_htfjma.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725734/12_qrbuyu.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725736/13_hr6doa.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725739/13_rkqgza.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725749/Natal_w0rtbr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725742/Ano-novo_j3dxpr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725679/1_pltxrv.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725679/3_wggkyx.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725677/2_w0vcq6.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725682/01_-_Carrossel_ee3zgi.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725692/02_-_Carrossel_wfdhr8.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725690/3_-_Carrossel_lmejzz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725688/05_-_Carrossel_qm59yo.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725686/04_-_Carrossel_rozltz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725693/1_piohhw.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725695/2_aq4hoj.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725698/3_ou4u1r.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725702/4_kf7vtr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725702/5_knrmug.png"
    ]
  },
  {
    id: 6,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725863/1_tovkjz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725866/2_uecpvz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725863/1_tovkjz.png"
    ]
  },
  {
    id: 7,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724266/1_c6yqj8.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724268/2_v9zfbk.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724267/3_zszmrs.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724265/4_qo93mj.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724263/5_ltbxgz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724264/6_ioroan.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724262/7_twa79d.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724262/8_xp0ock.png"
    ]
  },
  {
    id: 8,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726159/Concebra_Capa_xuzzk6.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726155/CON_PLANEJAMENTO_SETEMBRO_SEMANA-NAC-DO-TRANSITO-Card_hxazl7.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726151/CON_PLANEJAMENTO_SETEMBRO_DIA-DO-CONTADOR_LAYOUT_CARD_angkll.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726148/CON_PLANEJAMENTO_SETEMBRO_DIA-DO-COMPLIANCER-OFFICE_LAYOUT_jty8un.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726144/CON_PLANEJAMENTO_SETEMBRO_DIA-DO-CAMINHONEIRO_LAYOUT-CARD_rxiobf.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726141/CON_PLANEJAMENTO_SETEMBRO_DIA-DO-BIOLOGO_LAYOUT_mh4y8o.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726138/CON_PLANEJAMENTO_SETEMBRO_DIA-DA-SECRETARIA_pf6buz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726135/CON_PLANEJAMENTO_OUTUBRO_DIA-DO-PROFISSIONAL-DA-INFORM%C3%81TICA_kpmwzv.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726132/CON_PLANEJAMENTO_OUTUBRO_DIA-DO-MEDICO_hsy1wi.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726129/CON_PLANEJAMENTO_NOVEMBRO_DIA-DO-TECNICO-DA-SEG-DO-TRABALHO_LAYOUT_yrvuzn.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726125/CON_PLANEJAMENTO_JUNHO_01_04_24_ANIVERS%C3%81RIO-ARRECADA%C3%87%C3%83O-27_06_Layout-CARD---A_hzfwvl.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726123/CON_PLANEJAMENTO_JULHO_28_05_24_DIA-DO-PRF_LAYOUT-Card_lard9h.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726120/CON_PLANEJAMENTO_JULHO_28_05_24_DIA-DO-MOTOCICLISTA_LAYOUT-Card_der539.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726116/CON_PLANEJAMENTO_JULHO_28_05_24_COMBATE-A-DISC-RACIAL-Card_rzsbwq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726114/CON_PLANEJAMENTO_AGOSTO_03_07_DIA-DO-PSIC%C3%93LOGO_LAYOUT_fyztik.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726112/CON_PLANEJAMENTO_AGOSTO_03_07_DIA-DO-ESTAGI%C3%81RIO_LAYOUT_vnwei3.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726110/CON_PLANEJAMENTO_AGOSTO_03_07_DIA-DO-ECONOMISTA_LAYOUT_i0yp5d.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726104/CON_PLANEJAMENTO_AGOSTO_03_07_DIA-DO-ADVOGADO_LAYOUT_qrcor4.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726100/CON_PLANEJAMENTO_10-ANOS_BLACKDROP_qr3acm.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726098/CON_CONCIENCIA_A_BORDO_2024_20_12_23_ABRIL_POST_w0wsws.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739726094/CON_ANUNCIO_DE_VAGAS_LAYOUT_t1qmwf.jpg"
    ]
  },
  {
    id: 9,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724243/1_dgrorf.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724242/2_jdwbei.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724242/3_fywvam.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724242/4_xnohle.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724241/5_cl3q8a.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724240/6_nftu4i.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724239/7_deow24.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724236/8_u2e47q.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724235/9_kpkayn.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724239/10_bob49u.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724238/11_krop05.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724238/12_agvkf1.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724235/13_zwhddg.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724238/14_ux1zzq.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724238/12_agvkf1.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724236/16_mtdicm.jpg"
    ]
  },
  {
    id: 10,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724285/1_abow3s.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724287/2_zdux9i.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724288/3_vdzpwv.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724286/4_m1dqnu.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724289/5_kfe4ui.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724284/6_l6dhcp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724282/7_izlmsq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724282/8_ga5qta.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724285/9_e54d74.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724283/10_iq5uai.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724281/11_lmmegj.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724279/12_wgeex7.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724279/13_lfidg3.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724278/14_nr8prx.png"
    ]
  },
  {
    id: 11,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725906/1_lfkbuc.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725910/2_swzhke.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739725911/3_myoyt3.png"
    ]
  },
  {
    id: 12,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724337/1_zifwkr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724339/2_jeywst.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724337/3_vber1m.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724339/4_z8gmyv.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724335/5_iuxhep.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724336/6_yck64n.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724333/7_gzu70m.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724334/8_llhq3q.png"
    ]
  },
  {
    id: 13,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394287/capa-behance-inspirese-2_re4www.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724303/2_gptpcp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724301/3_jcqldv.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724303/2_gptpcp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724299/5_lz8bys.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724297/6_jnidsf.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724299/7_de1pcy.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724296/8_rsbklz.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724294/9_nhkzyx.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724295/10_lhbj10.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724296/11_eh4dxo.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724293/12_rgds3r.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724291/13_m5on9w.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724292/14_ehmd5j.png"
    ]
  },
  {
    id: 14,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724723/JHM-capa---Behance_nbmycr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724736/01_fauwlt.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724735/02_e4n9eh.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724733/3_ju0zpx.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724732/8_xioffc.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724726/09_01_eur0oc.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724725/23_01_vjspkq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724729/16_01_vpxnik.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724728/25-12_lwckvu.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724731/31_12_bynrxa.jpg"
    ]
  },
  {
    id: 15,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394410/5_kwm4nj.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724330/2_bkng0p.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724328/3_ceytdx.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724328/4_jq02d7.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724326/5_a7qroa.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724325/6_ivlzg9.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724325/7_cojd9d.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724324/8_sy30wo.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724323/9_dotwxw.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724322/10_r5sr3p.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724321/11_w334bw.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724320/12_fbtvov.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724319/13_uxn3ny.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724318/14_ngcztb.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724317/15_ieskzq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724316/16_ryj442.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724316/17_b4sapq.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724315/18_vpbt4f.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724313/19_aiixaj.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724312/20_kf4dp4.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724312/21_xiuty2.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724311/22_wdmoly.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724310/23_exswwg.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724309/24_xyrmyy.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724308/25_xxluq1.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724307/26_nklsui.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724306/27_ylehnr.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724306/28_bekopj.png",
      
    ]
  },
  {
    id: 16,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394347/Birinight-capa_nle0rb.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724668/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_10_srmmkl.gif",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724659/BNI_REDES-SOCIAIS-MAIO_22_04_LAYOUT-ALTERA%C3%87%C3%83O_swn36l.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724658/BNI_REDES_SOCIAIS_JUNHO_15_05_24_ALTERA%C3%87%C3%83O-post-festa-junina_yvuull.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724661/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_8_h50cjk.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724662/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_9_hyj27d.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724666/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_12_knnivx.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724670/BNI_REDES_SOCIAIS_JULHO_JULHO_LAYOUT-post-0_etjeyx.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724664/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_7_zelgkr.gif",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724672/BNI_REDES_SOCIAIS_JULHO_JULHO_LAYOUT-post-9b_aarwxc.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724667/BNI_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_11_wlhcn1.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724669/Birinight-embalagem-nova-_uivtfb.png"
    ]
  },
  {
    id: 17,
    images: [
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394377/Vulcano-capa_sqjprt.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724789/VUL_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_12_g8rhuk.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724785/POST-4-_p1ixr8.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724794/VUL_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_7_lx502c.gif",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724795/VUL_REDES_SOCIAIS_SETEMBRO_LAYOUT_RYAN-POST-9_uitm1q.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724792/VUL_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_9_hvotef.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724790/VUL_REDES_SOCIAIS_OUTUBRO_LAYOUT_RYAN_Post_11_lrxxou.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724796/VUL_REDES_SOCIAIS_AGOSTO-post-8_ap0zlp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724798/VUL_REDES_SOCIAIS_AGOSTO-post-7-RESERVA_qgcnmn.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724799/POST-3_nikkzp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724801/POST-1_wbk5oa.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724802/dia-do-rock-2_horbzy.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724804/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post-7_dgb7yy.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724803/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post-8_dtevfc.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724808/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE---Post-10_x6ozrx.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724806/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post-1_rnik23.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724812/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post_2_A_rwo88b.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724811/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post_2_B_x5vwum.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724810/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post_11_A_tsphkp.png",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1739724809/VUL_REDES_SOCIAIS_JUNHO_15_05_24_ARTE-Post_11_B_kgveh9.png"

    ]
  },
  {
    id: 18,
    images:[
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394537/1_i4kljn.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394555/2_myhcrs.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394556/3_cwinle.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394558/4_nufjdt.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394558/5_nvugz9.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394560/6_uyx51c.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394560/7_ekvlqw.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394561/8_qjdzls.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394563/9_c97v9k.jpg",
      "https://res.cloudinary.com/dtf69ghtx/image/upload/v1742394553/10_zy8rx5.jpg"

    ]
  }



];

export const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [isSwiping, setIsSwiping] = useState(false);

  // Hide swipe indicator after 3 seconds
  React.useEffect(() => {
    if (selectedProject && showSwipeIndicator) {
      const timer = setTimeout(() => {
        setShowSwipeIndicator(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  const getProjectDescription = (projectId: number) => {
    const key = `portfolio.projects.${projectId}.description`;
    const description = t(key, { returnNull: true });
    return description || null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
    setShowSwipeIndicator(false);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });

    // Calculate the angle of the swipe
    const deltaX = e.targetTouches[0].clientX - touchStart.x;
    const deltaY = e.targetTouches[0].clientY - touchStart.y;
    const angle = Math.abs(Math.atan2(deltaY, deltaX) * 180 / Math.PI);

    // If the angle is between 60 and 120 degrees, it's more vertical than horizontal
    if (angle > 60 && angle < 120) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    if (!selectedProject || !isSwiping) return;
    
    const swipeDistance = touchStart.y - touchEnd.y;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    
    if (Math.abs(swipeDistance) > 100) {
      if (swipeDistance < 0) {
        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex]);
      } else {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex]);
      }
    }
    
    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
    setIsSwiping(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
      setShowSwipeIndicator(true);
      setShowFullDescription(false);
    }
  };

  const toggleDescription = (e: React.MouseEvent, projectId?: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (projectId) {
      setExpandedDescriptions(prev => ({
        ...prev,
        [projectId]: !prev[projectId]
      }));
    } else {
      setShowFullDescription(!showFullDescription);
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          {t('portfolio.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => {
            const description = getProjectDescription(project.id);
            const isExpanded = expandedDescriptions[project.id];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer touch-manipulation"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={project.images[0]}
                    alt={t(`portfolio.projects.${project.id}.title`)}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5 sm:mb-1">
                      {t(`portfolio.projects.${project.id}.title`)}
                    </h3>
                    {description && (
                      <div>
                        <p className={`text-white/90 text-xs sm:text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {description}
                        </p>
                        <button 
                          onClick={(e) => toggleDescription(e, project.id)}
                          className="text-blue-400 hover:text-blue-300 text-xs font-medium mt-1 py-1 px-2 -ml-2 touch-manipulation active:text-blue-500"
                        >
                          {isExpanded ? t('portfolio.readLess') : t('portfolio.readMore')}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleModalClick}
        >
          <button
            onClick={() => {
              setSelectedProject(null);
              setShowSwipeIndicator(true);
              setShowFullDescription(false);
            }}
            className="absolute top-4 right-4 z-[60] p-2.5 text-white/90 hover:text-white transition-colors active:scale-95 transform touch-manipulation rounded-full bg-black/50 backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          {showSwipeIndicator && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <MoveHorizontal size={20} className="text-white" />
              <span className="text-white text-sm">{t('portfolio.swipeToNavigate')}</span>
            </motion.div>
          )}

          <div className="w-full max-w-6xl relative" onClick={e => e.stopPropagation()}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full touch-manipulation"
              onTouchStart={() => setShowSwipeIndicator(false)}
            >
              {selectedProject.images.map((image, index) => {
                const description = getProjectDescription(selectedProject.id);
                return (
                  <SwiperSlide key={index}>
                    <div className="relative h-[70vh] sm:h-[80vh]">
                      <img
                        src={image}
                        alt={`${t(`portfolio.projects.${selectedProject.id}.title`)} - Image ${index + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      {(description || t(`portfolio.projects.${selectedProject.id}.title`)) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[55]">
                          <div className="p-4 sm:p-6 md:p-8 max-w-[90%] mx-auto">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                              {t(`portfolio.projects.${selectedProject.id}.title`)}
                            </h3>
                            {description && (
                              <div>
                                <p 
                                  className={`text-white/90 text-xs sm:text-sm md:text-base max-w-prose ${
                                    !showFullDescription ? 'line-clamp-2' : ''
                                  }`}
                                >
                                  {description}
                                </p>
                                <button 
                                  onClick={toggleDescription}
                                  className="text-blue-400 hover:text-blue-300 text-xs font-medium mt-1 py-1 px-2 -ml-2 touch-manipulation active:text-blue-500"
                                >
                                  {showFullDescription ? t('portfolio.readLess') : t('portfolio.readMore')}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="swiper-button-prev !bg-black/50 !backdrop-blur-sm !z-[56]">
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button className="swiper-button-next !bg-black/50 !backdrop-blur-sm !z-[56]">
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};