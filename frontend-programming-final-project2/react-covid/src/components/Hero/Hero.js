import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <div>
        <section>
          <nav>
            <h2>Covid ID</h2>
            <h4>Monitoring Perkembangan Covid-19</h4>
            <p>
              Pandemi Covid-19 melanda dunia, dan Indonesia termasuk di
              dalamnya. Indonesia berjuang melawan Covid-19 dengan memodifikasi
              kebijakan karantina wilayah (lockdown) menjadi pembatasan sosial
              berskala besar (PSBB) yang bersifat lokal sesuai tingkat keparahan
              di wilayah provinsi, kabupaten, atau kota. Data yang disajikan
              berdasarkan provinsi yang ada di seluruh indonesia
            </p>
            {/* <button class={styles.hero__button}>Vaccine</button> */}
            <Button variant="primary">Vaccine</Button>
          </nav>
          <aside>
            <img
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=740&t=st=1682427941~exp=1682428541~hmac=a06d883f47f8699c7627e23524ca6f3e1242e10ba0d2a55a55d2a8e2ac074d25"
              alt=""
            />
          </aside>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
