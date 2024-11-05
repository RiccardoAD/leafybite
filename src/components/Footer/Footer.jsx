import './Footer.css'; 

const MyComponent = () => {
  return (
    <footer className="backdrop-blur-md fixed bottom-0 mx-auto mt-32 w-full max-w-container px-4 sm:text-gray-800 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
    <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <p className="text-sm/6 text-gray-600 max-md:text-center">
            ©
          20XX
         
            <a href="https://learnwithsumit.com/">Copyright</a>. All rights reserved.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 text-gray-500 md:justify-end">
            <a href="https://learnwithsumit.com/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-gray-200"></div>
            <a href="https://learnwithsumit.com/terms">Terms</a>
        </div>
    </div>
</footer>
  );
};

export default MyComponent;