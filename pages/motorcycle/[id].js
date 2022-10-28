import { useRouter } from "next/router";
import DetailsLayout from "../../Components/DetailsLayout";

function Part() {
  const router = useRouter();
  const { id } = router.query;
  return <DetailsLayout> {id}</DetailsLayout>;
}

export default Part;
