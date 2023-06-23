import { z } from 'zod';
import { StudentBloodGroup, Studentgender } from '../student/student.conts';
import { FBloodGroup, Fgender } from '../faculty/faculty.constant';

// req validation
const creatuserZodSchima = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is   required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'last Name is   required',
        }),
      }),
      dateOfBirth: z.string({
        required_error: 'dateOfBirth is Requred',
      }),
      gender: z.enum([...Studentgender] as [string, ...[string]], {
        required_error: 'gender is Requred',
      }),
      bloodGroup: z
        .enum([...StudentBloodGroup] as [string, ...[string]], {})
        .optional(),

      email: z
        .string({
          required_error: 'email is Requred',
        })
        .email(),
      contactNo: z.string({
        required_error: 'contactNo is Requred',
      }),
      emergencyContactNo: z.string({
        required_error: 'emergencyContactNo is Requred',
      }),

      presentAddress: z.string({
        required_error: 'presentAddress is Requred',
      }),
      permanentAddress: z.string({
        required_error: 'permanentAddress is Requred',
      }),

      guardian: z.object({
        fatherName: z.string({
          required_error: 'fatherName is   required',
        }),
        fatherOccupation: z.string({
          required_error: 'fatherOccupation is   required',
        }),
        fatherContactNo: z.string({
          required_error: 'fatherContactNo is   required',
        }),
        motherName: z.string({
          required_error: 'motherName is   required',
        }),
        motherOccupation: z.string({
          required_error: 'motherOccupation is   required',
        }),
        motherContactNo: z.string({
          required_error: 'motherContactNo is   required',
        }),
        address: z.string({
          required_error: 'address is   required',
        }),
      }),

      localGuardian: z.object({
        name: z.string({
          required_error: 'name is   required',
        }),
        occupation: z.string({
          required_error: 'occupation is   required',
        }),
        contactNo: z.string({
          required_error: 'contactNo is   required',
        }),
        address: z.string({
          required_error: 'address is   required',
        }),
      }),

      academicSemester: z.string({
        required_error: 'academicSemester is Requred',
      }),
      academicDepartment: z.string({
        required_error: 'academicDepartment is Requred',
      }),
      academicFaculty: z.string({
        required_error: 'academicFaculty is Requred',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

//// creat Faculty jod Schime
const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
        middleName: z.string().optional(),
      }),
      gender: z.enum([...Fgender] as [string, ...[string]], {
        required_error: 'gender is Requred',
      }),

      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),
      bloodGroup: z
        .enum([...FBloodGroup] as [string, ...[string]], {})
        .optional(),
      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),

      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),
      designation: z.string({
        required_error: 'Designation is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});
// req validation end
export const userValidation = {
  creatuserZodSchima,
  createFacultyZodSchema,
};
