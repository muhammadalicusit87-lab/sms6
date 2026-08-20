export type Role = 'owner' | 'manager'
export type ModuleKey = 'dashboard' | 'students' | 'classes' | 'fees' | 'attendance' | 'exams' | 'staff' | 'timetable' | 'reports' | 'expenses' | 'settings' | 'cards'
export interface User { username: string; name: string; role: Role }
export interface Student { id: number; admissionNo: string; name: string; nameUr: string; father: string; className: string; section: string; contact: string; status: 'Active' | 'Left'; fee: number; attendance: number; avatar: string }
export interface FeeRecord { id: number; student: string; admissionNo: string; className: string; month: string; amount: number; paid: number; status: 'Paid' | 'Partial' | 'Unpaid'; due: string }
export interface AttendanceRow { id: number; student: string; className: string; status: 'Present' | 'Absent' | 'Leave' | 'Late' }