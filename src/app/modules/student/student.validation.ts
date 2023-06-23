import { z } from 'zod';
import { StudentBloodGroup, Studentgender } from './student.conts';

// Update Student  zood schima//
const UpdateStudentZodSchima = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        middleName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum([...Studentgender] as [string, ...[string]]).optional(),
    bloodGroup: z
      .enum([...StudentBloodGroup] as [string, ...[string]])
      .optional(),

    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),

    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),

    guardian: z
      .object({
        fatherName: z.string().optional(),
        fatherOccupation: z.string().optional(),
        fatherContactNo: z.string().optional(),
        motherName: z.string().optional(),
        motherOccupation: z.string().optional(),
        motherContactNo: z.string().optional(),
        address: z.string().optional(),
      })
      .optional(),

    localGuardian: z
      .object({
        name: z.string().optional(),
        occupation: z.string().optional(),
        contactNo: z.string().optional(),
        address: z.string().optional(),
      })
      .optional(),

    academicSemester: z.string().optional(),
    academicDepartment: z.string().optional(),
    academicFaculty: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

// Update acadimic semester zood schima//
export const StudentValidation = {
  UpdateStudentZodSchima,
};
