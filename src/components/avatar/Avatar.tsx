import styles from "./Avatar.module.css";
import Container from "./Container";
import ProfilePicture from "./ProfiePicture";

export default function Avatar() {
  return (
    <div>
      <Container>
        <ProfilePicture />
      </Container>
    </div>
  );
}
