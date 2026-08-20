export type Role = 'owner' | 'manager'
export type ModuleKey = 'dashboard' | 'students' | 'classes' | 'fees' | 'attendance' | 'exams' | 'staff' | 'timetable' | 'reports' | 'expenses' | 'settings' | 'cards'
export interface User { username: string; name: string; role: Role }
export interface Student { id: number; admissionNo: string; name: string; nameUr: string; father: string; className: string; section: string; contact: string; status: 'Active' | 'Left'; fee: number; attendance: number; avatar: string }
export interface FeeRecord { id: number; student: string; admissionNo: string; className: string; month: string; amount: number; paid: number; status: 'Paid' | 'Partial' | 'Unpaid'; due: string }
export interface AttendanceRow { id: number; student: string; className: string; status: 'Present' | 'Absent' | 'Leave' | 'Late' }
export interface FeeHead { id: number; name: string; defaultAmount: number; optional?: boolean }
export interface Exam { id: number; name: string; className: string; term: string; date: string; status: 'Upcoming' | 'Completed' }
export interface ExamMark { studentId: number; examId: number; subject: string; marksObtained: number; maxMarks: number }
export interface StaffMember { id: number; name: string; cnic: string; contact: string; designation: string; salary?: number; joiningDate: string; status: 'Active' | 'On leave' | 'Left' }
export interface Expense { id: number; category: string; description: string; amount: number; date: string }
export interface TimetableEntry { day: string; time: string; subject: string; teacher: string; className: string; section: string }
export interface SchoolSettings { schoolName: string; address: string; contact: string; academicYear: string; lastBackup?: string }