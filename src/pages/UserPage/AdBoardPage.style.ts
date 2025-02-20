import { CSSProperties } from "react";

const cardTitle: CSSProperties = {
};

const openCardTitle: CSSProperties = {
    ...cardTitle,
    overflow: 'scroll',
    maxHeight: '100%',
    backgroundColor: '#000000',
    borderRadius: '0 0 10px 10px',
    width: 'calc(80% - 40px)',
};

const img: CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
};

const openImg: CSSProperties = {
    borderRadius: '10px 10px 0 0',
    width: "80%",
};

const card: CSSProperties = {
    width: 'calc(50% - 20px)', // 50% width minus margins
    margin: '10px',
    display: 'inline-block',
    verticalAlign: 'top',
};

const openCard: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: '0',
    background: 'rgba(0, 0, 0, 0.75)',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
};

const container: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
};

const fixedButton: CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
};

export const styles = {
  cardTitle,
  openCardTitle,
  img,
  openImg,
  card,
  openCard,
  container,
  fixedButton,
};