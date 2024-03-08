import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../configs/auth";
import FullProfile from "@/components/FullProfile";

interface Candidate {
  currentRole: string;
  currentLocation: string;
  profileSummary: string;
  previousRole: string;
  Name: string;
}

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [candidates, setCandidates] = useState<Candidate>({
    currentRole: '',
    currentLocation: '',
    profileSummary: '',
    previousRole: '',
    Name: '',
  });
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${DEV_PUBLIC_URL}id/${id}`);
        const candidates_data = response.data.data.candidatesData;
        const skills_data = candidates_data[0].Skills.split(",");
        console.log(candidates_data)
        setCandidates(candidates_data[0]);
        setSkills(skills_data);
        setLoading(false)
        console.log(response, "this is res");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (id) {
      fetchProfile();
    }
  }, [id]);

  return (
    <div>
      <FullProfile candidates={candidates} skills={skills} loading={loading} />
    </div>
  );
};

export default ProfilePage;
