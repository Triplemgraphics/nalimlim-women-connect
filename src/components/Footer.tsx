const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">
            Nalimlim Women Alliance Initiative (NAWAI)
          </h3>
          <p className="text-sm opacity-90 mb-4">
            Empowering Women and Girls in South Sudan
          </p>
          <div className="border-t border-primary-foreground/20 pt-4 mt-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} NAWAI. All rights reserved.
            </p>
            <p className="text-xs opacity-75 mt-2">
              Kapoeta, Eastern Equatoria State, South Sudan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
