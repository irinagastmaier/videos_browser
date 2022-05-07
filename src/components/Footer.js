export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer style={{ textAlign: 'center', color: '#79cadc' }}>
        &copy;{year} Irina Gastmaier
      </footer>
    </>
  );
}
