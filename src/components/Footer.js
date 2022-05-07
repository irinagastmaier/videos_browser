export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        style={{
          textAlign: 'center',
          color: '#79cadc',
          background: 'black',
          padding: '0.5rem',
        }}
      >
        &copy;{year} Irina Gastmaier
      </footer>
    </>
  );
}
