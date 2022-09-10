// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
// import MDButton from "components/MDButton";

// Images
/* import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
*/

export default function data() {
  const Tasks = ({ name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={2}>
      <MDBox ml={2} lineHeight={2}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDBox>
          <MDTypography variant="caption">{description}</MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "id", accessor: "id", align: "left" },
      { Header: "task", accessor: "task", width: "45%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">1</MDTypography>
        ),
        task: (
          <Tasks
            name="John Michael"
            description="john@creative-tim.comryeiiiiiooooooooooooooooooooooooooooooooooooiii"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="completed"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">2</MDTypography>
        ),
        task: <Tasks name="Alexa Liras" description="alexa@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="completed"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">3</MDTypography>
        ),
        task: (
          <Tasks
            name="Laurent Perrier"
            description="laurent@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="completed"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">4</MDTypography>
        ),
        task: (
          <Tasks name="Michael Levi" description="michael@creative-tim.com" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ongoing"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">5</MDTypography>
        ),
        task: (
          <Tasks name="Richard Gran" description="richard@creative-tim.com" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ongoing"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
      {
        id: (
            <MDTypography display="block" variant="button" fontWeight="medium">6</MDTypography>
        ),
        task: (
          <Tasks name="Miriam Eric" description="miriam@creative-tim.com" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="started"
              color="error"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
      },
    ],
  };
}
