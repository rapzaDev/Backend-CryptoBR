import { getRepository, Repository } from 'typeorm';

// import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

// import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';


class UsersRepository {
    private ormRepository: Repository<Appointment>;

    constructor() {
        this.ormRepository = getRepository(Appointment);
    }


}

export default UsersRepository;
