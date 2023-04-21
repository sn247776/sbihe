import { Box } from "@mui/material";
import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
function CourseSection() {
  return (
    <Box>
      <Box className="title">
        <h1>Courses We Offer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi
          harum libero fugiat.
        </p>
      </Box>
      <Box>
        <Box className="courseOffer">
          <h2>BCA(Bachelor of Computer Application)</h2>
          <h3>Course Details</h3>
          <Box>
            <a>
              <ChairIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Seats: 120
            </a>
            <a>
              <MenuBookIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Medium:
              Regular
            </a>
            <a>
              <AccountBalanceIcon sx={{ fontSize: 30, margin: "0 10px" }} />
              Course-Duration: 3 years
            </a>
            <a>
              <SchoolIcon sx={{ fontSize: 30, margin: "0 10px" }} />{" "}
              Affilated-By: CCS University (Meerut)
            </a>
          </Box>
          <p>
            Bachelor of Computer Applications is a full time three years course
            offered by Chaudhary Charan Singh University, Meerut it is an
            undergraduate degree course in computer applications. With the rapid
            growth of IT industry in India, the demand of computer professional
            is increasing day by day. This increasing growth of IT industry has
            created a lot of opportunities for the computer graduates.
          </p>
          <h3>Eligibility Criteria</h3>
          <p>
            A person, who have passed Higher Secondary/Intermediate (10+2) any
            other examination recognized as equivalent there to with "PCM" or
            COMMERCE with "Math", 50% more than 50% marks,shall be eligible for
            the course.
          </p>
        </Box>
        <hr />
      </Box>

      {/* BBA Section */}
      <Box>
        <Box className="courseOffer">
          <h2>BBA(Bachelor of Business Administration)</h2>
          <h3>Course Details</h3>
          <Box>
            <a>
              <ChairIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Seats: 60
            </a>{" "}
            <a>
              <MenuBookIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Medium:
              Regular
            </a>{" "}
            <a>
              {" "}
              <AccountBalanceIcon sx={{ fontSize: 30, margin: "0 10px" }} />
              Course-Duration: 3 years
            </a>
            <a>
              <SchoolIcon sx={{ fontSize: 30, margin: "0 10px" }} />{" "}
              Affilated-By: CCS University (Meerut)
            </a>
          </Box>
          <p>
            Bachelor of Business Administration or BBA is one of the most
            popular bachelor degree programmes after class XII. The BBA course
            is the gateway to numerous job opportunities in a plethora of
            sectors like Marketing, Education, Finance, Sales, and Government to
            name just a few. Science, Arts and Commerce. During the
            tenure of the course, candidates learn various aspects of business
            administration and management through class room lectures and
            practical projects like internship.
          </p>
          <h3>Eligibility Criteria</h3>
          <p>
            A person, who have passed Higher Secondary/Intermediate (10+2) any
            other examination recognized as equivalent there to with "PCM"
            ,COMMERCE,Art with 50% or more than 50% marks, shall be eligible for
            the course.
          </p>
        </Box>
      </Box>
      <hr />
      <Box className="courseOffer">
        <h2>B.com(Bachelor of Commerce)</h2>
        <h3>Course Details</h3>
        <Box>
          <a>
            <ChairIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Seats: 120
          </a>
          <a>
            <MenuBookIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Medium:
            Regular
          </a>
          <a>
            <AccountBalanceIcon sx={{ fontSize: 30, margin: "0 10px" }} />
            Course-Duration: 3 years
          </a>
          <a>
            <SchoolIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Affilated-By:
            CCS University (Meerut)
          </a>
        </Box>
        <p>
         B.COM is an extremely
          popular undergraduate course that students puruse right after their
          class 12th. Here are some important facts to konw about Bachelor or
          Arts “A Bachelor of Commerce, abbreviated as B.Com is an undergraduate
          degree in commerce and related subjects. The course is designed to
          provide students with a wide range of managerial skills and
          understanding in streams like finance, accounting, taxation and
          management”.
        </p>
        <h3>Eligibility Criteria</h3>
        <p>
          A person, who have passed Higher Secondary/Intermediate (10+2) any
          other examination recognized as equivalent there to with COMMERCE with
          50% more than 50% marks,shall be eligible for the course.
        </p>
      </Box>
      <hr />
      <Box className="courseOffer">
        <h2>B.Ed(Bachelor in Education)</h2>
        <h3>Course Details</h3>
        <Box>
          <a>
            <ChairIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Seats: 120
          </a>
          <a>
            <MenuBookIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Medium:
            Regular
          </a>
          <a>
            <AccountBalanceIcon sx={{ fontSize: 30, margin: "0 10px" }} />
            Course-Duration: 3 years
          </a>
          <a>
            <SchoolIcon sx={{ fontSize: 30, margin: "0 10px" }} /> Affilated-By:
            CCS University (Meerut)
          </a>
        </Box>
        <p>
      B.Ed is the bachelor’s degree undertaken to take up
          teaching as a profession. However, it is worth knowing that B.Ed or
          Bachelor of Education is not an undergraduate degree and to pursue
          this course one needs to have completed his/her graduation. Thus, B.Ed
          is a professional course and right after completing this course,
          students can get a job at the school level. The B.Ed course duration
          is typically two years.
        </p>
        <h3>Eligibility Criteria</h3>
        <Box>
          <h4>Educational Qualification:</h4>
          <p>
            Candidates need to have completed their graduation in any stream
            (that is, Arts, Science or Commerce) in order to fulfill B.Ed
            eligibility criteria. However, most popular B.Ed colleges allow
            candidates to take part in their admission process for B.Ed course
            if they have graduated with at least 50% aggregate marks at the UG
            level.
          </p>
          <h4>Age Limit:</h4>
          <p>
            For B.Ed admissions in a majority of colleges, there is no age bar.
            However, admission process of some B.Ed colleges require candidates
            to be minimum 19 years in age.
          </p>{" "}
        </Box>
      </Box>
      <hr />
    </Box>
  );
}

export default CourseSection;
