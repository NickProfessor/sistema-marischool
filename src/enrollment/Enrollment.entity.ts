import { Course } from "src/course/Course.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Enrollment{
    @PrimaryColumn()
    id: number

    @Column()
    studantName: string

    @Column()
    studantEmail: string

    @Column()
    studantCpf: string

    @Column()
    studantPhone: string

    @Column()
    birthDate: Date

    @ManyToOne(() => Course, (course) => course.enrollments, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })

    @JoinColumn({ name: 'course_id' })
    course: Course;

}