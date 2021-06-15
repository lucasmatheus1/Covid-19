const painelPB = require("../../assets/images/photosLinks/painelpb.png");
const flexibilizacao = require("../../assets/images/photosLinks/Reabertura.png");
const sobre = require("../../assets/images/photosLinks/sobre.png");
const clipping = require("../../assets/images/photosLinks/clipping.png");
const quem = require("../../assets/images/photosLinks/quem.png");
const contato = require("../../assets/images/photosLinks/contato.png");

const data = {
  arrayImages: [
    [
      { photo: painelPB, link: "/painelpb" },
      { photo: flexibilizacao, link: "/reabertura" },
      { photo: sobre, link: "/sobre" },
    ],
    [
      { photo: clipping, link: "/clipping" },
      { photo: quem, link: "/quemsomos" },
      { photo: contato, link: "/contato" },
    ],
  ],
};

export default data;
