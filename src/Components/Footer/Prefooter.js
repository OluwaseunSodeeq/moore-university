import Wrapper from "../Ui/Wrapper";
import FooterButton from "./FooterButton";
import FooterList from "./FooterList";
import styles from "./Prefooter.module.css";

const Prefooter = () => {
  const img = "images/prefooter.png";
  const iconsListData = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 9H2V21H6V9Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.11996 4 3.39996 4.46C2.92921 4.59318 2.50194 4.84824 2.16131 5.19941C1.82068 5.55057 1.57875 5.98541 1.45996 6.46C1.14518 8.20556 0.991197 9.97631 0.999961 11.75C0.988741 13.537 1.14273 15.3213 1.45996 17.08C1.59092 17.5398 1.83827 17.9581 2.17811 18.2945C2.51794 18.6308 2.93878 18.8738 3.39996 19C5.11996 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1792 17.9094 22.4212 17.4746 22.54 17C22.8523 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.74996 15.02L15.5 11.75L9.74996 8.48V15.02Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.11996 4 3.39996 4.46C2.92921 4.59318 2.50194 4.84824 2.16131 5.19941C1.82068 5.55057 1.57875 5.98541 1.45996 6.46C1.14518 8.20556 0.991197 9.97631 0.999961 11.75C0.988741 13.537 1.14273 15.3213 1.45996 17.08C1.59092 17.5398 1.83827 17.9581 2.17811 18.2945C2.51794 18.6308 2.93878 18.8738 3.39996 19C5.11996 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1792 17.9094 22.4212 17.4746 22.54 17C22.8523 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.74996 15.02L15.5 11.75L9.74996 8.48V15.02Z"
        stroke="#7DBCB0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];
  const iconstList = iconsListData.map((each) => <li>{each}</li>);

  return (
    <Wrapper classes={styles.prefooter}>
      <div className={styles.imgDiv}>
        <img src={img} alt="" />
      </div>
      <ul className={styles.icons}>{iconstList}</ul>
      <div className={styles.precontainer}>
        <div className={styles.prefooterDiv}>
          <div className={styles.top}>
            <div className="one">
              <FooterList index={0} />
            </div>
            <div className={styles.two}>
              <FooterList index={1} />
              <FooterList index={2} />
            </div>
            <div className="three">
              <FooterList index={3} />
              <FooterList index={4} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className="a">
              <FooterList index={5} />
              <FooterList index={6} />
            </div>
            <div className="b">
              <FooterList index={7} />
            </div>
          </div>
        </div>
        <div className="prefooterBtns">
          <FooterButton />
        </div>
      </div>
    </Wrapper>
  );
};

export default Prefooter;
