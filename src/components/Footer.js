const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-600 text-center p-4 mt-8">
      <div className="container mx-auto">
        <p>&copy; {currentYear} VG MixedMidea. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;